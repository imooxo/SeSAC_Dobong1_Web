const Props_ex1 = props => {
    return (
        <h1>
            제가 좋아하는 음식은 
            <span style={{color: "red"}}> {props.food}</span>
            입니다.
            <hr/>
        </h1> 
    )
}

Props_ex1.defaultProps = {
    food: "초밥"
};

export default Props_ex1;

