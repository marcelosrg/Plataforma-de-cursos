import React, { useEffect, useState } from "react";
import {
  H1,
  H2,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@adminjs/design-system";
import { ApiClient, useCurrentAdmin } from "adminjs";

export default function Dashboard() {
  const api = new ApiClient();
  const [currentAdmin] = useCurrentAdmin()
  const [resources, setResources] = useState<{ [key: string]: number }>();
  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    const res = await api.getDashboard();
    setResources(res.data);
  }
  return (
    <section style={{ padding: "1.5rem" }}>
      <H1>Seja bem-vindo, {currentAdmin?.firstName}!</H1>

      <section style={{ backgroundColor: "#FFF", padding: "1.5rem" }}>
        <H2>Resumo</H2>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#FF0043" }}>
              <TableCell style={{ color: "#FFF" }}>Recurso</TableCell>
              <TableCell style={{ color: "#FFF" }}>Registros</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resources ? (
              Object.entries(resources).map(([resource, count]) => (
                <TableRow key={resource}>
                  <TableCell>{resource}</TableCell>
                  <TableCell>{count}</TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </section>
    </section>
  );
}
