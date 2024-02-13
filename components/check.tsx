"use client";

import "client-only";

export default function Check() {
  return (
    <button
      onClick={() => {
        alert("CLICKED!");
      }}
    >
      Click me
    </button>
  );
}
