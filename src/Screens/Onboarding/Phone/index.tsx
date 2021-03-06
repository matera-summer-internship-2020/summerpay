import { Container, Text, View } from 'native-base';
import React from 'react';

import { useDispatch } from 'react-redux';

import ButtonComponent from '../../../Components/ButtonComponent';
import GenericInput from '../../../Components/GenericInput';
import ProgressBar from '../../../Components/ProgressBar';

import { changePhoneAction } from '../../../Ducks/Onboarding/Actions';
import { phoneMask } from '../../../Helpers/Masks';
import { CentralNavigationService } from '../../../Services/Navigation';
import { Telephone } from '../../../types';
import { OnboardingStackParamList } from '../types';

import Styles from './styles';

const Phone: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  const dispatch = useDispatch();

  const onChange = (value: string): void => {
    setInputValue(value);
  };

  const onPress = (): void => {
    const unmaskedNumber = inputValue.replace(/\D/g, '');
    const newTelephoneType: Telephone = {
      telephoneType: {
        telephoneTypeId: 2
      },
      number: unmaskedNumber.substring(2, unmaskedNumber.length),
      ddd: unmaskedNumber.substring(0, 2)
    };

    dispatch(changePhoneAction(newTelephoneType));

    centralNavigationService.navigate('MaritalStatus');
  };

  return (
    <Container style={Styles.container}>
      {/* TODO: change number of steps if we add confirmation screen */}
      <ProgressBar currentStep={3} numberOfSteps={6} />
      <Container style={Styles.inputAndLabelContainer}>
        <Text style={Styles.instructionText}>Qual seu número de celular e DDD?</Text>
        <View style={Styles.inputView}>
          <GenericInput
            maxLength={15}
            keyboardType={'numeric'}
            placeholder={'(00) 0000-0000'}
            value={phoneMask(inputValue)}
            onChange={onChange}
          />
        </View>
        <ButtonComponent
          size={'m'}
          disabled={!(inputValue.length >= 14)}
          mainButton={true}
          text={'Próximo'}
          onPress={onPress}
        />
      </Container>
    </Container>
  );
};

export default Phone;
