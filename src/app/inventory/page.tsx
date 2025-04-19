"use client";

import React, { useState } from "react";
import { AddItemForm } from "@/components/AddItemForm";
import { InventoryList } from "@/components/InventoryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  stock: number;
}

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: "1", name: "Example Item", description: "This is an example item.", stock: 10 },
  ]);

  const handleAddItem = (values: { name: string; initialStock: number; description?: string }) => {
    const item: Omit<InventoryItem, "id"> = {
      ...values,
      stock: values.initialStock, // Map `initialStock` to `stock`.
    };
    setInventory([...inventory, { ...item, id: String(Date.now()) }]);
  };

  const handleUpdateStock = (id: string, newStock: number) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, stock: newStock } : item)
    );
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add New Item</CardTitle>
        </CardHeader>
        <CardContent>
          <AddItemForm onSubmit={handleAddItem} />
        </CardContent>
      </Card>
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Inventory List</CardTitle>
          </CardHeader>
          <CardContent>
            <InventoryList
              items={inventory}
              onUpdateStock={handleUpdateStock}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryPage;
