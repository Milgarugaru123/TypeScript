import CartItem from "@/src/CartItem";
import List from "@/src/List";
import Title from "@/src/Title";

const page = () => {
  return (
    <>
      <Title title={`장바구니`} />
      <div className={`flex gap-5`}>
        <List />
        <section className={`w-100 h-fit border rounded-xl p-3`}>
          <CartItem />
        </section>
      </div>
    </>
  );
};

export default page;
