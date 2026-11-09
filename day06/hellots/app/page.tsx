import Button from "@/src/atoms/Buttons/Button";
import Input from "@/src/atoms/Inputs/Input";
import Underline from "@/src/atoms/Underlines/Underline";

export default function Home() {
  return (
    <>
      <Input />
      <Underline type={`email`} />
      <Underline type={`password`} />
      <Button desc={`버튼`} />
      <Button desc={`버튼`} size={`large`} color={`secondary`} />
    </>
  );
}
