export const Button = ({ buttonLabel, className, clickHandler }: { buttonLabel: string, className?: string, clickHandler?: () => void }) => {
    return (
        <button className={className} onClick={clickHandler}>
            {buttonLabel}
        </button>
    )
}