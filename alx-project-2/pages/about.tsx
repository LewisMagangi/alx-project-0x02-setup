
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <p className="text-lg text-gray-700 mb-6">This is the About page.</p>
        <div className="flex gap-4">
          <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
          <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
          <Button size="large" shape="rounded-full">Large Rounded-full</Button>
        </div>
      </main>
    </>
  );
}
