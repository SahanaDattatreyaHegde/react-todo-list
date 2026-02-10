interface ButtonProps {
    buttonLabel: string,
    className?: string,
    clickHandler?: () => void
}

export const Button = ({ buttonLabel, className, clickHandler }: ButtonProps) => {

    return (
        <button className={className} onClick={clickHandler}>
            {buttonLabel}
        </button>
    )
}