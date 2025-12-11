"use client";
import PerformanceGauge from "@/pages/user-dashboard/PerformanceCard";
import TodoList from "@/pages/user-dashboard/ToDo";

export default function DemoPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <PerformanceGauge score={8} period="Monthly" />
      <TodoList/>
    </div>
  );
}
