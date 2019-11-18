export function GlobalStyle() {
    return (
        <>
            <style jsx global>{`
                html, body {
                    margin: 0;
                }
                html * {
                    box-sizing: border-box;
                }
            `}</style>
        </>);
};