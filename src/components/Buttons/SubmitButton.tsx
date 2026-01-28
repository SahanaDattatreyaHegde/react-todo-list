export const SubmitButton = ({ buttonLabel, className }: { buttonLabel: string, className?: string }) => {
    return (
        <button type="submit" className={className}>
            {buttonLabel}
        </button>
    )
}