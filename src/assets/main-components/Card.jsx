// Card singola 

export default function Card({ children, name }) {

    return (
        <section>
            <h3>{name}</h3>
            <ul>
                {children}
            </ul>
        </section>
    )
}