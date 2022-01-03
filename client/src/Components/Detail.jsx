
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {getDetail} from '../Redux/actions';

//styles
import { 
  ContainerDetail,
  ContainerImg,
  ImgPoke,
  ContainerDescription,
  DescriptionInternal,
  Title,
  Label,
  DivTypes,
  LabelTypes,
  DetailBtn
} from './Styles/Detail';

const Detail = () => {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  const detail = useSelector((state) => state.detail)
  
  const regresarHome = (e) => {
    e.preventDefault();
    navigate('/home', {replace: true})
  }

  return (
    <ContainerDetail>
      <ContainerImg>
        <ImgPoke src={detail.image} alt={`screen ${detail.name}`}/>
      </ContainerImg>
      <ContainerDescription>
        <DescriptionInternal>
          <Title>ID: </Title>
          <Label>{detail.id}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Name: </Title>
          <Label>{detail.name}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Types: </Title>
          <DivTypes>
            {detail.types ? detail.types.map(type => <LabelTypes key={Math.random()}>{type}</LabelTypes>) : detail.types}
          </DivTypes>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>HP: </Title>
          <Label>{detail.hp}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Attack: </Title>
          <Label>{detail.attack}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Defense: </Title>
          <Label>{detail.defense}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Speed: </Title>
          <Label>{detail.speed}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Height: </Title>
          <Label>{detail.height}</Label>
        </DescriptionInternal>
        <DescriptionInternal>
          <Title>Weight: </Title>
          <Label>{detail.weight}</Label>
        </DescriptionInternal>
        <DetailBtn onClick={regresarHome}>Home</DetailBtn>
      </ContainerDescription>
    </ContainerDetail>
  );
}
 
export default Detail;