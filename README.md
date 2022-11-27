# BookmarkHub

BookmarkHub is all in one bookmarking solution for developers.

**Motivation**

I read a lot of documentation, articles and guides all the time. After I read those resources I want to refer back for future need. In order to
do that I need a good bookmarking solutions. I tried edge collections, chrome bookmarks and other solutions but nothing worked for me. The
developer inside thought "Why not build it yourself." That is why I started building BookmarkHub. I want to solve resource bookmarking issues
all developers face for articles, blog posts and even code snippets.

## Features

For the first MVP I am thinking of building these features.

-   The ability to bookmark any site with few clicks without any extra steps using extensions.
-   The ability organize bookmarks into collections with tags and descriptions.
-   The ability to save, edit and organize code snippets for future use.

## Tech Stacks

These are the tech stacks I am using.

-   [NextJs](https://nextjs.org/docs) as full-stack web-framework
-   [NextAuth](https://next-auth.js.org/) as authentication framework with support for identity providers like GitHub
-   [Prisma](https://www.prisma.io/docs) as a database ORM
-   [tRPC](https://trpc.io/) for end to end type safe APIs
-   [tailwind css](https://tailwindcss.com/) for building the user interface
-   [React query](https://tanstack.com/query/v3/) for state management and query
-   [React hooks form](https://react-hook-form.com/) for form management
-   [Zod](https://github.com/colinhacks/zod) as API input and form input validator

## System Architecture

Simple system architecture

![Alt text](/docs/assets/system-architecture.png)

## Contributor

-   [@endalk200](https://endalk200.com) Endalkachew Biruk
