import useTitle from "../../core/components/Header/hook/useTitle";
import StockComponent from "../../components/Stock/index"

interface Props {
  title: string;
}

export default function Stock({ title }: Props) {
  const { defineTitle } = useTitle();
  defineTitle(title);

  return (
    <div>
      <StockComponent/>
    </div>
  );
}