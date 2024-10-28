import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="max-w-[600px] mx-auto p-4 shadow-lg rounded-lg">
      <CardHeader className="flex flex-col items-center text-center gap-4">
        <Image
          alt="Logo Fatec Votorantim"
          radius="sm"
          src="/assets/logoFatecCapi.png"
          width={300}
          className="mb-2"
        />
        <h1 className="text-3xl font-bold text-gray-800">Bem-vindo!</h1>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-center gap-4 text-center">
        <p className="text-lg text-gray-600">Já possui uma conta?</p>
        <Button
          as="a"
          href="/login"
          color="primary"
          size="lg"
          className="w-full max-w-xs"
        >
          Entrar
        </Button>
      </CardBody>
      <Divider />
      <CardFooter className="flex flex-col items-center gap-2 text-center">
        <p className="text-lg text-gray-600">Ainda não possui uma conta?</p>
        <Link
          href="/register"
          color="primary"
          className="text-blue-500 hover:underline"
        >
          Cadastre-se aqui!
        </Link>
      </CardFooter>
    </Card>
  );
}
