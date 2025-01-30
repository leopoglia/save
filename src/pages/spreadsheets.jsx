import Button from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Nav from "../components/nav";


export default function Spreadsheets() {


    const spreadsheets = [
        "Cálculo Simples Nácional.xlsb",
        "Tese Exclusão do ICMS BC Pis Cofins - Bloco C170.xlsb",
        "Tese Exclusão do PIS Confins da própia BC - Bloco C170.xlsb",
        "Tese Gross Up - Bloco C170.xlsb",
        "Tese LC 192 - Bloco C170.xlsb",
    ]




    return (
        <div>
            <Header />
            <div className="flex">
                <Nav />
                <div className="w-full p-8">
                    <div className="flex w-full items-center justify-between h-12">
                        <h1 className="text-2xl font-medium text-secondary">Planilhas</h1>
                    </div>

                    <table className="w-full mt-10 text-left">
                        <thead>
                            <tr className="h-14 text-secondary text-sm border-b px-10">
                                <th className="pl-4">
                                    <Input type="checkbox" />
                                </th>
                                <th className="w-10/12">Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>


                            {spreadsheets.map((item) => (
                                <tr className="h-14 border-b hover:bg-zinc-100" key={item.id}>
                                    <td className="pl-4">
                                        <Input
                                            type="checkbox"
                                            className="mt-1"
                                        />
                                    </td>

                                    <td>{item}</td>
                                    <td>
                                        <Button type="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                            </svg>
                                        </Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    )
}