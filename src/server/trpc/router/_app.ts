import { router } from "../trpc";
import { authRouter } from "./auth";
import { collectionsRouter } from "./collections";

export const appRouter = router({
    collection: collectionsRouter,
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
