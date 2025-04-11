// Card singola 

export default function ActressCard({ children, name }) {

    return (
        <section>
            <h3>{name}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}