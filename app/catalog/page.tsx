// import '../globals.css'

import { Card } from "@/shared/components/card/Card";
import { Switch } from "@/shared/components/switch/Switch";

export default function Catalog() {
    return (<div>
        <Switch />
        <ul className="flex gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </ul>
    </div>
    )
}
