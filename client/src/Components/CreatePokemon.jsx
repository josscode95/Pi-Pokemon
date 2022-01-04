import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getTypes, createPokemon} from '../Redux/actions';

//styles
import { 
  DivCreate,
  Form,
  TitleForm,
  DivInternal,
  LabelForm,
  InputForm,
  DivTypes,
  LabelType,
  ContainerType,
  DivTypeInt,
  TypeButton,
  FormBtn,
  BackButton 
} from './Styles/CreatePokemon';

const CreatePokemon = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [input, setInput] = useState({
    name: '',
    image: '',
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type: []
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch])

  const regresarHome = (e) => {
    e.preventDefault();
    navigate('/home', {replace: true})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value
    })
  }

  const handleSelect = (e) => {
    setInput({
      ...input,
      type: [...input.type, e.target.value]
    })
  }

  const handleDelete = (e) => {
    setInput({
      ...input,
      type: input.type.filter(type => type !== e)
    })
  }

  //despues hacer con switch
  const validateInfo = (input) => {
    let errors = {};
    if(!input.name) errors.name = 'Name is required';
    if(input.hp < 0) errors.hp = "HP can't be negative";
    if(input.attack < 0) errors.attack = "Attack can't be negative";
    if(input.defense < 0) errors.defense = "Defense can't be negative";
    if(input.speed < 0) errors.speed = "Speed can't be negative";
    if(input.height < 0) errors.height = "Height can't be negative";
    if(input.weight < 0) errors.weight = "Weight can't be negative";
    if(input.type.length === 0) errors.type = "Types is required";
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInfo(input);
    if(!Object.keys(errors).length){
      dispatch(createPokemon(input));
      alert('El pokemon se ha creado con exito');
      setInput({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        type: []
      });
      navigate('/home', {replace: true})
    }else{
      alert('The name, hp, attack and type are required')
    }
  }

  return (
    <DivCreate>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TitleForm>Create Pokemon</TitleForm>
        <DivInternal>
          <LabelForm>Name: </LabelForm>
          <InputForm 
            type="text" 
            value={input.name} 
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Image: </LabelForm>
          <InputForm 
            type="url" 
            name="image"
            onChange={(e) => handleChange(e)} 
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>HP: </LabelForm>
          <InputForm 
            type="number" 
            name="hp"
            value={input.hp}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Attack: </LabelForm>
          <InputForm 
            type="number" 
            name="attack"
            value={input.attack}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Defense: </LabelForm>
          <InputForm 
            type="number" 
            name="defense"
            value={input.defense}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Speed: </LabelForm>
          <InputForm 
            type="number" 
            name="speed"
            value={input.speed}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Height: </LabelForm>
          <InputForm 
            type="number" 
            name="height"
            value={input.height}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivInternal>
          <LabelForm>Weight: </LabelForm>
          <InputForm 
            type="number" 
            name="weight"
            value={input.weight}
            onChange={(e) => handleChange(e)}
          />
        </DivInternal>
        <DivTypes>
          <LabelType>Types: </LabelType>
          <select onChange={(e) => handleSelect(e)} name="type">
            {
              types.map((t, i) => {
                return (
                  <option value={t.name} key={i}>
                    {t.name}
                  </option>
                )
              })
            }
          </select>
          <ContainerType>
            {
              input.type.map((element, index) => {
                return (
                  <DivTypeInt key={index}>
                    <TypeButton
                      type="button"
                      onClick={() => handleDelete(element)}
                    ><span>{element}</span> X</TypeButton>
                  </DivTypeInt>
                )
              })
            }
          </ContainerType>
        </DivTypes>
        <FormBtn type="submit">
          Create
        </FormBtn>
      </Form>
      <BackButton onClick={regresarHome}>
        Regreso a Home
      </BackButton>
    </DivCreate>
  );
}
 
export default CreatePokemon;