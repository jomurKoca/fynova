import { Card, CardContent } from "@/components/ui/card";

export default function AktionsKarte() {
  return (
    <div className="flex flex-col sm:flex-row py-10 sm:py-2 px-5">
      <Card className="w-96 cursor-pointer rounded-md">
        <CardContent className="p-0">
          <img src="/fotos/aktionskarte.png" alt="Akti" className="w-full rounded-md h-full " />
        </CardContent>
      </Card>
    </div>
  );
}