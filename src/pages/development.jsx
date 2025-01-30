import Header from "../components/header";
import Nav from "../components/nav";


export default function Development() {
    return (
        <div>
            <Header />
            <div className="flex">
                <Nav />

                <div className="p-8">
                    <div className="flex items-center justify-between h-12">
                        <h1 className="text-2xl font-medium text-secondary">Em Desenvolvimento...</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}