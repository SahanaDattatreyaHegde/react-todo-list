export const Button = (props: ButtonProps) => {
    const { buttonLabel, className, clickHandler } = props;

    return (
        <button className={className} onClick={clickHandler}>
            {buttonLabel}
        </button>
    )
}