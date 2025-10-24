import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>React Router Sandbox</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              This is a starter template. Replace this page with your own routes
              and components.
            </p>
            <ul className="list-disc pl-5">
              <li>
                Add pages in <code>src/pages</code> and wire them in{" "}
                <code>src/App.tsx</code>.
              </li>
              <li>
                Use shadcn components from <code>src/components/ui</code>.
              </li>
              <li>Tailwind is configured; use utility classes in TSX.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;
