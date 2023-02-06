import React, { useState } from 'react';
import './App.scss';
import { OptionsButton } from './components/optionsButton';
import { cloths } from './images/cloths/cloths';
import { eyes } from './images/eyes/eyes';
import { fonts } from './images/font/font';
import { hats } from './images/hats/hats';
import { mouths } from './images/mouth/mouth';
import { overSkin } from './images/over_skin/over-skin';
import { skin } from './images/skin/skin';

export const App: React.FC = () => {
  const [clothsImage, setClothsImage] = useState(cloths[0].img);
  const [eyesImage, setEyesImage] = useState(eyes[0].img);
  const [fontsImage, setFontsImage] = useState(fonts[0].img);
  const [hatsImage, setHatsImage] = useState(hats[0].img);
  const [mouthsImage, setMouthsImage] = useState(mouths[0].img);
  const [overSkinImage, setOverSkinImage] = useState(overSkin[0].img);
  const [skinImage, setSkinImage] = useState(skin[0].img);

  return (
    <div className="banana">
      <div className="banana__pictute" style={{ backgroundImage: `url(${fontsImage})` }}>
        <img
          src={clothsImage}
          alt="cloth"
          className="banana__cloths"
        />

        <img
          src={eyesImage}
          alt="eyes"
          className="banana__eyes"
        />

        <img
          src={hatsImage}
          alt="hats"
          className="banana__hats"
        />

        <img
          src={mouthsImage}
          alt="mouths"
          className="banana__mouths"
        />

        <img
          src={overSkinImage}
          alt="overSkinImage"
          className="banana__overSkin"
        />

        <img
          src={skinImage}
          alt="skinImage"
          className="banana__skin"
        />
      </div>

      <div className="banana__attributes">
        <div className="banana__selects">
          <select
            name="cloths"
            value={clothsImage}
            className="banana__select"
            onChange={(event) => setClothsImage(event.target.value)}
          >
            <option selected disabled>Select Cloth</option>
            {cloths.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="eyes"
            value={eyesImage}
            className="banana__select"
            onChange={(event) => setEyesImage(event.target.value)}
          >
            <option selected disabled>Select Eyes</option>
            {eyes.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="fonts"
            value={fontsImage}
            className="banana__select"
            onChange={(event) => setFontsImage(event.target.value)}
          >
            <option selected disabled>Select Background</option>
            {fonts.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="hats"
            value={hatsImage}
            className="banana__select"
            onChange={(event) => setHatsImage(event.target.value)}
          >
            <option selected disabled>Select Hats</option>
            {hats.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="mouths"
            value={mouthsImage}
            className="banana__select"
            onChange={(event) => setMouthsImage(event.target.value)}
          >
            <option selected disabled>Select Mouth</option>
            {mouths.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="overSkin"
            value={overSkinImage}
            className="banana__select"
            onChange={(event) => setOverSkinImage(event.target.value)}
          >
            <option selected disabled>Select Over Skin</option>
            {overSkin.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>

          <select
            name="skin"
            value={skinImage}
            className="banana__select"
            onChange={(event) => setSkinImage(event.target.value)}
          >
            <option selected disabled>Select Skin</option>
            {skin.map(item => (
              <OptionsButton
                key={item.id}
                cloth={item}
                value={item.img}
              />
            ))}
          </select>
        </div>

      </div>
    </div>
  );
};
