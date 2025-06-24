import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Info } from "lucide-react";

const xrExperiences = [
  {
    title: "デフォルトVR体験",
    href: "/xr/default",
    icon: "🥽",
    description:
      "基本的なWebXR体験です。VRヘッドセットを装着して仮想空間でオブジェクトとインタラクションできます。",
  },
  {
    title: "マルチプレイヤーVR",
    href: "/xr/multiplayer",
    icon: "👥",
    description:
      "複数のユーザーが同じVR空間で協力したり、交流したりできるマルチプレイヤー体験です。",
  },
];

const XRHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="outline" className="hover:bg-gray-50">
              ← ホームに戻る
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🌌</div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">WebXR体験</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            最新のWebXR技術を使用した没入感溢れる仮想現実体験ができます。
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              💡 <strong>ヒント:</strong> VRヘッドセット（Meta
              Quest、PICO等）またはARデバイスでアクセスすると、より没入感のある体験ができます。
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {xrExperiences.map((experience) => (
            <Link
              key={experience.href}
              href={experience.href}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {experience.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {experience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <CardDescription className="text-center text-gray-600 mb-6 leading-relaxed">
                    {experience.description}
                  </CardDescription>
                  <div className="flex justify-center">
                    <Button className="w-full">体験する →</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Requirements Section */}
        <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900">
              🔧 動作環境
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <CheckCircle className="text-green-500 h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>推奨:</strong> VRヘッドセット（Apple Vision Pro, Meta
                Quest 2/3、PICO 4等）
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Info className="text-blue-500 h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>HTTPS接続が必要です（localhost除く）</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default XRHomePage;
