import React from 'react'

const FormPsychStatus = ({psychStatus, setPsychStatus}) => {
  return (
    <>
    <div className="row">
        <div className="mb-3 col">
            <label>Внешний вид</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={psychStatus.look}
            onChange={(e)=>setPsychStatus({...psychStatus, look: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Опрятен">Опрятен</option>
                <option value="Не опрятен">Не опрятен</option>
            </select>
        </div>
        <div className="mb-3 col">
            <label>Запах алкоголя изо рта</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={psychStatus.breathSmell}
            onChange={(e)=>setPsychStatus({...psychStatus, breathSmell: e.target.value})}
            >
                <option defaultValue>Выберите вариант</option>
                <option value="Есть">Есть</option>
                <option value="Нет">Нет</option>
            </select>
        </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Поведение</label>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Апатичен"
        value={psychStatus.behave}
        onChange={(e)=>setPsychStatus({...psychStatus, behave: e.target.value})}
        />
      </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Сознание</label>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Ясное"
        value={psychStatus.consciousness}
        onChange={(e)=>setPsychStatus({...psychStatus, consciousness: e.target.value})}
        />
      </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Ориентация в пространстве</label>
        <select 
        className="form-select" 
        aria-label="Default select example"
        value={psychStatus.orientation}
        onChange={(e)=>setPsychStatus({...psychStatus, orientation: e.target.value})}
        >
            <option defaultValue>Выберите вариант</option>
            <option value="Есть">Есть</option>
            <option value="Нет">Нет</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Расстройства восприятия</label>
        <input 
        type="text" 
        className="form-control"
        value={psychStatus.perception}
        onChange={(e)=>setPsychStatus({...psychStatus, perception: e.target.value})}
        />
      </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Эмоциональный фон</label>
        <input 
        type="text" 
        className="form-control"
        value={psychStatus.emotion}
        onChange={(e)=>setPsychStatus({...psychStatus, emotion: e.target.value})}
        />
      </div>
    </div>
    <div className="row">
        <div className="mb-3 col">
            <label className="form-label">Ночной сон</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={psychStatus.sleep}
            onChange={(e)=>setPsychStatus({...psychStatus, sleep: e.target.value})}
            >
            <option defaultValue>Выберите вариант</option>
            <option value="Спит">Спит</option>
            <option value="Не спит">Не спит</option>
            </select>
        </div>
        <div className="mb-3 col">
            <label className="form-label">Попытка суицида</label>
            <select 
            className="form-select" 
            aria-label="Default select example"
            value={psychStatus.suicide}
            onChange={(e)=>setPsychStatus({...psychStatus, suicide: e.target.value})}
            >
            <option defaultValue>Выберите вариант</option>
            <option value="Без борьбы">Была</option>
            <option value="С борьбой">Отрицает</option>
            </select>
        </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Мотив употребления алкоголя</label>
        <input 
        type="text" 
        className="form-control"
        value={psychStatus.motive}
        onChange={(e)=>setPsychStatus({...psychStatus, motive: e.target.value})}
        />
      </div>
    </div>
    <div className="row">
      <div className="mb-3 col">
        <label className="form-label">Цель госпитализации</label>
        <textarea 
        className="form-control" 
        rows="1"
        value={psychStatus.goalMed}
        onChange={(e)=>setPsychStatus({...psychStatus, goalMed: e.target.value})}
        ></textarea>
      </div>
    </div>
    </>
  )
}

export default FormPsychStatus