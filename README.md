# React Router Sandbox Template

Vite + React + TypeScript starter with React Router, Tailwind CSS, and shadcn-ui. Designed to be modifiable by agents/LLMs quickly with clear structure and conventions.

## Stack

- React 18 + TypeScript
- Vite (dev server on port 8080)
- React Router DOM v6
- Tailwind CSS + tailwindcss-animate
- shadcn-ui (pre-generated primitives under `src/components/ui`)
- TanStack Query (optional data fetching)

## Quick start

```bash
# using pnpm (recommended)
pnpm install
pnpm dev   # http://localhost:8080

# or using npm
npm install
npm run dev
```

Build/preview:

```bash
pnpm build
pnpm preview
```

## Project structure

```
src/
  main.tsx            # app bootstrap
  app.tsx             # router + providers
  pages/              # route-level components (index.tsx, not-found.tsx)
  components/ui/      # shadcn-ui primitives (Button, Card, Dialog, Form, Table, ...)
  hooks/              # common hooks (use-toast, use-mobile)
  lib/utils.ts        # cn utility
public/               # static assets
```

## Routing

- Define routes in `src/app.tsx` using `<Routes>` and `<Route>`.
- Add page components under `src/pages/*.tsx` and wire them in `app.tsx`.
- Keep reusable UI in `src/components/` and import into pages.

Example:

```tsx
// src/App.tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## UI components (shadcn)

Import primitives from `src/components/ui`. Examples:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
```

Form pattern (React Hook Form + zod):

```tsx
const form = useForm<ZodType>({ resolver: zodResolver(schema) });
return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Save</Button>
    </form>
  </Form>
);
```

## Styling

- Tailwind is configured; use utility classes directly in TSX.
- Theme tokens via `bg-background`, `text-foreground`, etc. in `index.css`.

## Data fetching (optional)

- TanStack Query is pre-wired via `QueryClientProvider` in `App.tsx`.

```tsx
const { data, isLoading } = useQuery({
  queryKey: ["items"],
  queryFn: fetchItems,
});
```

## Common tasks for agents/LLMs

- Add a page: create `src/pages/MyPage.tsx`, import and add route in `App.tsx`.
- Add a component: create `src/components/MyThing.tsx`, import into pages.
- Add a UI primitive: import from `src/components/ui/*`.
- Add API call: create a hook under `src/hooks/` and use TanStack Query in the page.
- Add form: use shadcn `Form` with `react-hook-form` + `zod`.

## Scripts

- `pnpm dev` (or `npm run dev`): start dev server on port 8080
- `pnpm build`: production build
- `pnpm preview`: preview build locally

## Notes

- Keep routes lean; co-locate domain UI in `components/`.
- Prefer composition of shadcn primitives. Avoid inline styles except for quick prototypes.
