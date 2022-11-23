import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, protectedProcedure } from "../trpc";

export const collectionsRouter = router({
    createCollection: protectedProcedure
        .input(z.object({ title: z.string(), description: z.string().nullable() }))
        .mutation(async ({ input, ctx }) => {
            try {
                const collection = await ctx.prisma.collection.create({
                    data: {
                        title: input.title,
                        description: input.description,
                        collectorId: ctx.session.user.id,
                    },
                });

                return {
                    message: "Collection created successfully",
                    data: collection,
                };
            } catch (error) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message:
                        "Something wen't wrong while trying to create new collection",
                    cause: error,
                });
            }
        }),

    getCollection: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input, ctx }) => {
            const collection = await ctx.prisma.collection.findUnique({
                where: {
                    id: input.id,
                },
            });

            if (!collection) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Collection not found",
                });
            }

            return {
                message: `Found collection`,
                data: collection,
            };
        }),

    getCollections: protectedProcedure.query(async ({ ctx }) => {
        const collections = await ctx.prisma.collection.findMany({
            where: {
                collectorId: ctx.session.user.id,
            },
        });

        return {
            message: `Found ${collections.length} collections`,
            data: collections,
        };
    }),

    updateCollection: protectedProcedure
        .input(
            z.object({
                id: z.string(),
                title: z.string(),
                description: z.string().nullable(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            try {
                const collection = ctx.prisma.collection.update({
                    where: {
                        id: input.id,
                    },
                    data: {
                        title: input.title,
                        description: input.description,
                    },
                });

                return {
                    message: "Successfully updated collection",
                    data: collection,
                };
            } catch (error) {
                throw new TRPCError({
                    code: "BAD_REQUEST",
                    message: "Something wen't wrong while trying to update collection",
                    cause: error,
                });
            }
        }),

    deleteCollection: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ input, ctx }) => {
            const collection = await ctx.prisma.collection.delete({
                where: {
                    id: input.id,
                },
            });

            return {
                message: "Deleted collection",
                data: collection,
            };
        }),
});
