import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Beginner Roman Pizza",
    description: "Learn the fundamentals of Roman-style pizza making, including dough preparation, classic toppings, and baking techniques.",
    level: "Beginner",
  },
  {
    title: "Intermediate Roman Pizza",
    description: "Dive deeper into hydration ratios, fermentation techniques, and crafting pizzas with a crispy yet airy crust.",
    level: "Intermediate",
  },
  {
    title: "Advanced Roman Pizza Mastery",
    description: "Master advanced toppings, gourmet ingredient pairings, and how to recreate authentic Roman pizza in any oven.",
    level: "Advanced",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-white p-6 md:p-12">
      <section className="text-center mb-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Master the Art of Roman-Style Pizza
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600">
          Choose your level and start baking like a Roman pizzaiolo!
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Card className="rounded-2xl shadow-lg p-4">
              <CardContent>
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <Button className="w-full">Enroll in {course.level} Course</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
