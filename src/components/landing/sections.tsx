import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Бесплатный интенсив 17–19 февраля</Badge>,
    title: "СМЕРТЬ ТАЛАНТА: переходим на математику рекламного кадра",
    content: 'Узнайте формулу дорогого снимка и начните управлять светом, формой и своим чеком, даже если всегда считали, что у вас нет изюминки и чутья.\n\nЗа 3 дня превратим вашу съемку в предсказуемый творческий бизнес.',
    showButton: true,
    buttonText: 'ЗАБРАТЬ ФОРМУЛУ'
  },
  {
    id: 'program',
    title: '3 дня, которые убьют в вас любителя:',
    customContent: (
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
          <div className="text-[#FF4D00] text-5xl font-bold mb-4">01</div>
          <h3 className="text-2xl font-bold text-white mb-6">АНАТОМИЯ РЕКЛАМНОГО КАДРА</h3>
          <ul className="space-y-4 text-neutral-300">
            <li>— <strong className="text-white">Диагностика потолка:</strong> почему интуиция мешает брать заказы с чеком выше 50 000 ₽</li>
            <li>— <strong className="text-white">Разбор 3 фатальных ошибок:</strong> из-за каких действий кадры выглядят дешево</li>
            <li>— <strong className="text-white">Секреты рекламного объема:</strong> пошаговый алгоритм сборки кадра из студии</li>
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-neutral-400"><strong className="text-white">Результат:</strong> готовая технология сборки кадра — точный расчет, который можно повторить 10 раз из 10</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
          <div className="text-[#FF4D00] text-5xl font-bold mb-4">02</div>
          <h3 className="text-2xl font-bold text-white mb-6">РЕНТГЕН РЕФЕРЕНСОВ</h3>
          <ul className="space-y-4 text-neutral-300">
            <li>— <strong className="text-white">Активация насмотренности:</strong> за 60 секунд определять логику создания любого кадра</li>
            <li>— <strong className="text-white">Деконструкция люкса:</strong> превращаем Chanel и Apple в понятное ТЗ для вашей студии</li>
            <li>— <strong className="text-white">Фильтр визуального шума:</strong> 3 критические ошибки при анализе чужих работ</li>
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-neutral-400"><strong className="text-white">Результат:</strong> секретных схем не существует — только логика. Видите кадр насквозь</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
          <div className="text-[#FF4D00] text-5xl font-bold mb-4">03</div>
          <h3 className="text-2xl font-bold text-white mb-6">ГРАНД-РАЗБОР И ТОЧКА ПЕРЕХОДА</h3>
          <ul className="space-y-4 text-neutral-300">
            <li>— <strong className="text-white">Ликвидация слепых зон:</strong> разборы ваших работ — где интуиция дала осечку</li>
            <li>— <strong className="text-white">Проектирование чека 150к+:</strong> персональный план выхода в лигу системных фотографов</li>
          </ul>
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-neutral-400"><strong className="text-white">Результат:</strong> за вами стоят бренды в очереди</p>
          </div>
        </div>
      </div>
    ),
    showButton: true,
    buttonText: 'ИДУ НА МАРАФОН'
  },
  {
    id: 'details',
    title: 'Выключайте интуицию, включайте профессионализм',
    content: (
      <div className="space-y-6 text-left max-w-2xl mx-auto text-lg">
        <p><strong>Когда:</strong> 17, 18, 19 февраля</p>
        <p><strong>Во сколько:</strong> 19:00 (МСК)</p>
        <p><strong>Где:</strong> закрытые онлайн-трансляции (ссылка придет после регистрации)</p>
      </div>
    ),
    showButton: true,
    buttonText: 'ЗАРЕГИСТРИРОВАТЬСЯ'
  },
]