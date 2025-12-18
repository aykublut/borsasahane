import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="mt-24 w-full">
      <Separator />

      <div
        className="mx-auto max-w-7xl px-6 py-12
                      flex flex-col gap-10"
      >
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-2 max-w-sm">
            <h4 className="text-lg font-medium">BORSA ŞAHANE</h4>
            <p className="text-sm">
              Finansal kararlarınızı sade ve hızlı yönetin.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="link" className="text-green-200/90 cursor-pointer">
              Civciv Şahane 1
            </Button>
            <Button variant="link" className="text-green-200/90 cursor-pointer">
              Civciv Şahane 2
            </Button>
            <Button variant="link" className="text-green-200/90 cursor-pointer">
              Civciv Şahane 2.5
            </Button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md">
          <Input type="email" placeholder="Email address" />
          <Button>Subscribe</Button>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm">
          <span>© 2025 BORSA ŞAHANE</span>

          <span className="text-[11px]">
            Bu site parodi amaçlı yapılmış olup hiçbir şekilde ticari faliyet
            amacı taşımaz. Bu site Şevket Şahane ismindeki hayal ürünü
            karakterin landing pagesidir
          </span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
