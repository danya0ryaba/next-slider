// import '../globals.css'

import { data } from "@/public/data/data";
import { Card } from "@/shared/components/card/Card";
import { Switch } from "@/shared/components/switch/Switch";

export default function Catalog() {
    return (<div>
        <Switch cards={data} />
        <ul className="flex gap-4">
            {data.map((item) => (<Card key={item.id} {...item} />))}
        </ul>
    </div>
    )
}
