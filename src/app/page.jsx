import Image from "next/image";
import Appname from "./componets/Appname";
import Table from "./componets/Table";
import Addcontact from "./componets/addcontact";

export default function Home() {
  return (
    <div className="bg-natural-900-5 m-2">
      <Appname />
      <Addcontact />
      <Table />
    </div>
  )
}