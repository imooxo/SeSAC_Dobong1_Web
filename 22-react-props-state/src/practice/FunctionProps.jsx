export function FunctionProps({ name, number, price }) {
    //   props = {
    //     name: "사과",
    //     price: 1000,
    //     number: 5,
    //   };
    //   console.log(props);
    // const { name, number: count, price } = props;
    return (
      <div>
        <h5>{name}</h5>
        <p>
          {number}개에 {price}원
        </p>
        {/* <img src={img} alt="pooh" /> */}
        <hr />
      </div>
    );
  }