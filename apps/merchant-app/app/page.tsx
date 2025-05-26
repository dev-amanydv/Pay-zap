"use client";

import { useBalance } from "@repo/store";

export default function() {
  const balance = useBalance();
  return <div>
    Balance: {balance}
  </div>
}