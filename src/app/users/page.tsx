"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const UsersPage: React.FC = () => {
  const users: User[] = [
    { id: "1", name: "John Doe", email: "john.doe@example.com", role: "admin" },
    { id: "2", name: "Jane Smith", email: "jane.smith@example.com", role: "user" },
    { id: "3", name: "Alice Johnson", email: "alice.johnson@example.com", role: "user" },
  ];

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableCaption>A list of registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
