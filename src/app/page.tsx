import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NextPage } from "next";

const demos = [
  {
    title: "XRコンテンツ",
    href: "/xr",
    icon: "🥽",
    description:
      "メインコンテンツです。WebXRを使用して、VRヘッドセットを装着して、仮想空間を探索できます。",
  },
  {
    title: "共同編集スペース",
    href: "/collaborative",
    icon: "👥",
    description:
      "リアルタイムで複数のユーザーが協力して作業できる共同編集機能をテストしています。",
  },
  {
    title: "Supabaseテスト",
    href: "/database",
    icon: "📃",
    description:
      "Supabaseの機能をテストしています。データベースとの連携や認証機能を確認します。",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "React Three Fiber",
  "Tailwind CSS",
  "shadcn/ui",
  "WebXR",
  "Supabase",
  "Liveblocks",
];

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            WebXR & LLM デモページ
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            最新のWebテクノロジーを体験できるデモページ一覧
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {demos.map((demo) => (
            <Link key={demo.href} href={demo.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border hover:border-primary/50">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {demo.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {demo.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <CardDescription className="text-center text-gray-600 mb-6 leading-relaxed">
                    {demo.description}
                  </CardDescription>
                  <div className="flex justify-center">
                    <Button className="w-full group-hover:bg-primary/90 transition-colors duration-300">
                      ページへ移動 →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              現在の技術スタック
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
