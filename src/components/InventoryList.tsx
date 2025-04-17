
"use client";

import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  stock: number;
}

interface InventoryListProps {
  items: InventoryItem[];
  onUpdateStock: (id: string, newStock: number) => void;
}

export const InventoryList: React.FC<InventoryListProps> = ({ items, onUpdateStock }) => {
  const handleStockChange = (id: string, newStock: number) => {
    onUpdateStock(id, newStock);
  };

  return (
    <div className="w-full">
      <Table>
        <TableCaption>A list of your inventory items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Stock Quantity</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  defaultValue={item.stock}
                  onChange={(e) => {
                    const newStock = parseInt(e.target.value);
                    if (!isNaN(newStock)) {
                      handleStockChange(item.id, newStock);
                    }
                  }}
                  className="w-24"
                />
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm">Restock</Button>
                <Button size="sm" variant="destructive">Remove</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
