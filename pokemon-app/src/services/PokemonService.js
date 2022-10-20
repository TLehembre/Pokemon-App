
export function getTypeColor(type) {
    let color;
  
    switch(type) {
      case 'grass': color = '#95C24D';
      break;
      case 'fire': color = '#FD7D25';
      break;
      case 'water': color = '#4592C3';
      break;
      case 'poison': color = '#BA7EC8';
      break;
      case 'electric': color = 'yellow';
      break;
      case 'flying': color = 'red';
      break;
      case 'bug': color = 'darkgreen';
      break;
      case 'rock': color = 'gray';
      break;
      case 'psychic': color = 'pink';
      break;
      case 'normal': color = '#A3ACAE';
      break;
      case 'ghost': color = '#7B62A3';
      break;
      default: color = 'black';
    }
  
      return {backgroundColor: color}
    
  }