
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to StockPilot</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your inventory management system.</p>
        </CardContent>
      </Card>
    </div>
  );
}

