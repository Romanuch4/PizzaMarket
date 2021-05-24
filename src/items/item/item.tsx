import React from 'react';
import {ItemsProps, PizzasItemType} from '../../types/types';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

const ItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 280px;
  margin: 0 17.5px 60px 17.5px;

  @media screen and (max-width: 1400px) {
    max-width: 260px;
  }

  @media screen and (max-width: 600px) {
    max-width: 280px;
    margin: 0 17.5px 20px 17.5px;
  }
`;

const ItemImgWrapStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  margin-bottom: 11px;

  @media screen and (max-width: 1400px) {
    max-width: 240px;
  }

  @media screen and (max-width: 600px) {
    max-width: 260px;
  }
`;

const ItemImgStyle = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;

const ItemTitleStyle = styled.h3`
  display: flex;
  align-items: flex-end;
  min-height: 52px;
  margin-bottom: 22px;
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 1.3;
  color: #000000;
  text-align: center;
  letter-spacing: 0.01em;
  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }
`;

const ItemOptionsStyle = styled.div`
  margin-bottom: 17px;
  padding: 7px 6px 0 6px;
  border-radius: 10px;
  background: #f3f3f3;
  width: 100%;
`;

const ItemOptionWrapStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemTypeStyle = styled.input`
  appearance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 32px;
  margin-right: 6px;
  margin-bottom: 7px;
  border-radius: 5px;
  background: transparent;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);

  :checked {
    background: #fff;
  }

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }

  ::before {
    content: attr(data-name);
    font-weight: bold;
    font-size: 14px;
    line-height: 1.2142857;
    color: #2c2c2c;
    text-align: center;
    letter-spacing: 0.015em;
  }

  :last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1400px) {
    width: 110px;
  }
`;

const ItemSizeStyle = styled(ItemTypeStyle)`
  width: 85px;
  @media screen and (max-width: 1400px) {
    width: 70px;
  }
`;

const ItemBottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ItemBottomPrice = styled.span`
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
  line-height: 1.2272727;
  letter-spacing: 0.015em;

  @media screen and (max-width: 1400px) {
    font-size: 18px;
  }
`;

const ItemBottomBtn = styled.button`
  padding: 11px 18px;
  border: 1px solid #eb5a1e;
  border-radius: 30px;
  background: #ffffff;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #eb5a1e;
  line-height: 1.1875;

  :hover {
    cursor: pointer;
    background: #eb5a1e;
    color: #fff;
  }

  :hover span span {
    background-color: #fff;
  }

  @media screen and (max-width: 1400px) {
    padding: 8px 14px;
    font-size: 14px;
  }
`;

const ItemBottomIcon = styled.span`
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 7px;
  display: inline-block;
`;

const ItemBottomIconElem = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #eb5a1e;
  width: 12px;
  height: 2.2px;
  border-radius: 2.2px;

  :last-child {
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const MyLoader: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="129" cy="129" r="129" />
    <rect x="0" y="277" rx="0" ry="0" width="260" height="52" />
    <rect x="0" y="357" rx="6" ry="6" width="260" height="85" />
    <rect x="0" y="463" rx="0" ry="0" width="86" height="38" />
    <rect x="144" y="461" rx="9" ry="9" width="114" height="41" />
  </ContentLoader>
);

export const Item: React.FC<ItemsProps> = React.memo(({ pizzasItems, activeCategory, isLoaded, addPizzaToBasket, dispatch }) => {
  const item = React.useRef<HTMLDivElement | null>(null);
  interface ItemConfigType {
    size: string,
    type: string,
  }
  React.useEffect(() => {
    if (item && item.current) {
      // @ts-ignore: Object is possibly 'null'.
      item.current.parentNode.childNodes.forEach((element: HTMLDivElement) => {
        element.style.display = 'none';
        if (activeCategory === 0) {
          element.style.display = 'flex';
        } else if (Number(element.dataset.category) === activeCategory) {
          element.style.display = 'flex';
        }
      });
    }
  }, [activeCategory]);

  const addPizzasToBasket = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>, itemConfig: ItemConfigType) => {
    const dataItem = pizzasItems[evt.target.parentNode.parentNode.dataset.id];
    
    // если модификация товара не менялась, id не изменится. В случае изменения размера или типа теста к нему
    //прибавится 1000 или 2000 единиц соответственно. Это сделано для того, чтобы создать новый индекс, по которому
    //можно будет отображать массивы пицц в корзине.
    let addToId: number = 0;
    if (itemConfig.size === '30 см.') {
      addToId += 1000;
    } else if (itemConfig.size === '40 см.') {
      addToId += 2000;
    }

    if (itemConfig.type !== 'тонкое') {
      addToId += 10000;
    }
    dispatch(
      addPizzaToBasket({
        id: dataItem.id + addToId,
        title: dataItem.name,
        price: dataItem.price,
        imgSrc: dataItem.imageUrl,
        size: itemConfig.size,
        type: itemConfig.type,
      }),
    );
  };
  const types = ['тонкое', 'толстое'];
  const pizza = pizzasItems.map((elem: PizzasItemType, index: number) => {
    const itemConfig: ItemConfigType = {
      size: '26 см.',
      type: 'тонкое',
    };

    const checkType: React.ChangeEventHandler<HTMLInputElement> | undefined = (evt: React.ChangeEvent) => {
      itemConfig.type = evt.target.dataset.name;
    };

    const checkSize: React.ChangeEventHandler<HTMLInputElement> | undefined = (evt: React.ChangeEvent) => {
      itemConfig.size = evt.target.dataset.name;
    };
    const inputType = elem.types.map((input1: number, i: number) => {
      return (
        <ItemTypeStyle
          name={`type${pizzasItems[index].id}`}
          type="radio"
          data-name={types[input1]}
          key={i}
          onChange={checkType}
        />
      );
    });

    const inputSize = elem.sizes.map((input2, i) => {
      return (
        <ItemSizeStyle
          name={`size${pizzasItems[index].id}`}
          type="radio"
          data-name={`${String(input2)} см.`}
          key={i}
          onChange={checkSize}
        />
      );
    });
    if (isLoaded) {
      return (
        <ItemStyle ref={item} key={elem.id} data-id={elem.id} data-category={elem.category}>
          <ItemImgWrapStyle>
            <ItemImgStyle src={elem.imageUrl} alt={elem.title} />
          </ItemImgWrapStyle>
          <ItemTitleStyle>{elem.name}</ItemTitleStyle>
          <ItemOptionsStyle>
            <ItemOptionWrapStyle>{inputType}</ItemOptionWrapStyle>
            <ItemOptionWrapStyle>{inputSize}</ItemOptionWrapStyle>
          </ItemOptionsStyle>
          <ItemBottomStyle>
            <ItemBottomPrice>{`от ${elem.price}₽`}</ItemBottomPrice>
            <ItemBottomBtn onClick={(evt) => addPizzasToBasket(evt, itemConfig)}>
              <ItemBottomIcon>
                <ItemBottomIconElem />
                <ItemBottomIconElem />
              </ItemBottomIcon>
              Добавить
            </ItemBottomBtn>
          </ItemBottomStyle>
        </ItemStyle>
      );
    } else {
      return <MyLoader key={index} />;
    }
  });
  return <>{pizza}</>;
});
