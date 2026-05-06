import { CardInformasi } from "../component/CradInformasi";
import Button from "../component/ui/Button";

export default function Competition() {
    return (
        <div>
            {/* <h1>Halaman cimpetition</h1> */}
            <CardInformasi
                  icon="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                  desc="Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”."
                  imageUrl="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                  buttons={
                    <><Button tittle="Info Selengapnya" variant="primary"/>
                      <Button tittle="Hubungi Panitia" variant="outline"/></>
                  }
                />
        </div>
    )
}