import React from 'react'

const FormSomatStatus = ({somatStatus, setSomatStatus}) => {
  return (
    <>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Общее состояние</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.condition}
            onChange={(e)=>setSomatStatus({...somatStatus, condition: e.target.value})}
            >
            <option defaultValue>Выберите вариант</option>
            <option value="Удовлетворительное">Удовлетворительное</option>
            <option value="Средней тяжести">Средней тяжести</option>
            <option value="Тяжелое">Тяжелое</option>
            <option value="Крайне тяжелое">Крайне тяжелое</option>
            </select>
        </div>
        <div className="mb-3 col">
            <label className="form-label">Питание</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.nutrition}
            onChange={(e)=>setSomatStatus({...somatStatus, nutrition: e.target.value})}
            >
            <option defaultValue>Выберите вариант</option>
            <option value="Пониженного">Пониженного</option>
            <option value="Повышенного">Повышенного</option>
            <option value="Истощен">Истощен</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className='fw-bold form-label'>Кожные покровы</label>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.skinColor}
            onChange={(e)=>setSomatStatus({...somatStatus, skinColor: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Обычного цвета">Обычного цвета</option>
                <option value="Цианотические">Цианотические</option>
                <option value="Акроцианоз">Акроцианоз</option>
                <option value="Мраморные">Мраморные</option>
                <option value="Бледные">Бледные</option>
                <option value="Гиперимированные">Гиперимированные</option>
            </select>
        </div>
        <div className="mb-3 col">
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.skinHumidity}
            onChange={(e)=>setSomatStatus({...somatStatus, skinHumidity: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Сухие">Сухие</option>
                <option value="Влажные">Влажные</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Следы старых и свежих ссадин, ушибов, гематом, парезов, воспаления</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.scars}
            onChange={(e)=>setSomatStatus({...somatStatus, scars: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Состояние конъюктивы</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.eyeState}
            onChange={(e)=>setSomatStatus({...somatStatus, eyeState: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Блеск глаз">Блеск глаз</option>
                <option value="Гиперимия">Гиперимия</option>
                <option value="Икретичность">Икретичность</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">В легких дыхание</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder='Жесткое'
            value={somatStatus.breathe}
            onChange={(e)=>setSomatStatus({...somatStatus, breathe: e.target.value})}
            />
        </div>
        <div className="mb-3 col">
            <label className="form-label">Хрипы</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.wheezing}
            onChange={(e)=>setSomatStatus({...somatStatus, wheezing: e.target.value})}
            >
            <option defaultValue>Выберите вариант</option>
            <option value="Есть">Есть</option>
            <option value="Нет">Нет</option>
            </select>
        </div>
    </div>
    <div className="row">
        <label className="form-label">Сатурация</label>
        <div className="input-group mb-3 col">
            <input 
            type="text" 
            className="form-control"
            value={somatStatus.saturation}
            onChange={(e)=>setSomatStatus({...somatStatus, saturation: e.target.value})}
            />
            <span class="input-group-text">%</span>
        </div>
        <label className="form-label">Тоны сердца</label>
        <div className="mb-3 col">
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.tonesHeart}
            onChange={(e)=>setSomatStatus({...somatStatus, tonesHeart: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Ясные">Ясные</option>
                <option value="Приглушенные">Приглушенные</option>
                <option value="Глухие">Глухие</option>
                <option value="Аритмичные">Аритмичные</option>
            </select>
        </div>
    </div>
    <div className="row">
        <label className="form-label">Артериальное давление</label>
        <div className="input-group mb-3 col">
                <input 
                type="text" 
                className="form-control"
                value={somatStatus.antPressure1}
                onChange={(e)=>setSomatStatus({...somatStatus, antPressure1: e.target.value})}
                />
                <span class="input-group-text">/</span>
                <input 
                type="text" 
                className="form-control"
                value={somatStatus.antPressure2}
                onChange={(e)=>setSomatStatus({...somatStatus, antPressure2: e.target.value})}
                />
        </div>
        <label className="form-label">Частота пульса в мин.</label>
        <div className="mb-3 col">
            <input 
            type="text" 
            className="form-control"
            value={somatStatus.pulse}
            onChange={(e)=>setSomatStatus({...somatStatus, pulse: e.target.value})}
            />
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Наполнение</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.fill}
            onChange={(e)=>setSomatStatus({...somatStatus, fill: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Удовлетворительное">Удовлетворительное</option>
                <option value="Слабое">Слабое</option>
                <option value="Сильное">Сильное</option>
                <option value="Ритмичное">Ритмичное</option>
                <option value="Аритмичное">Аритмичное</option>
                <option value="Нитевидное">Нитевидное</option>
            </select>
        </div>
        <div className="mb-3 col">
            <label className="form-label">Дефицит</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.deficite}
            onChange={(e)=>setSomatStatus({...somatStatus, deficite: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Стабильным">Есть</option>
                <option value="Уменьшается">Нет</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Язык</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.tongue}
            onChange={(e)=>setSomatStatus({...somatStatus, tongue: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Живот</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.stomach}
            onChange={(e)=>setSomatStatus({...somatStatus, stomach: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Печень</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.liver}
            onChange={(e)=>setSomatStatus({...somatStatus, liver: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Рвота, тошнота</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.vomit}
            onChange={(e)=>setSomatStatus({...somatStatus, vomit: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Стабильным">Есть</option>
                <option value="Уменьшается">Нет</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Стул</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={somatStatus.diarrhea}
            onChange={(e)=>setSomatStatus({...somatStatus, diarrhea: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Стабильным">Есть</option>
                <option value="Уменьшается">Нет</option>
            </select>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Диурез</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.diuresis}
            onChange={(e)=>setSomatStatus({...somatStatus, diuresis: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Отеки</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.edema}
            onChange={(e)=>setSomatStatus({...somatStatus, edema: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Глюкоза в крови</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.glucose}
            onChange={(e)=>setSomatStatus({...somatStatus, glucose: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Костно-суставной аппарат</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.bonesLink}
            onChange={(e)=>setSomatStatus({...somatStatus, bonesLink: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Состояние периферической сосудистой системы</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.periferState}
            onChange={(e)=>setSomatStatus({...somatStatus, periferState: e.target.value})}
            ></textarea>
        </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Дополнения</label>
            <textarea 
            className="form-control" 
            rows="1"
            value={somatStatus.additionalInfo}
            onChange={(e)=>setSomatStatus({...somatStatus, additionalInfo: e.target.value})}
            ></textarea>
        </div>
    </div>
    </>
  )
}

export default FormSomatStatus