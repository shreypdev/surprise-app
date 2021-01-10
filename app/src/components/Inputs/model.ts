export interface InputFieldType {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    clearInput?: boolean;
    maxlength?: number;
    ref?: any;
    clearOnEdit?: boolean;
    className?: string;
    autoFocus?: boolean;
    onIonChange?: any;
    inputMode?:
      | 'decimal'
      | 'email'
      | 'none'
      | 'numeric'
      | 'search'
      | 'tel'
      | 'text'
      | 'url';
    passwordBtnText?: any;
    passwordBtnHandler?: any;
    type?:
      | 'number'
      | 'time'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'search'
      | 'date'
      | 'password';
    readonly?: boolean;
    required?: boolean;
    // Generic <input/> handlers
    onKeyUp?: any;
    onKeyDown?: any;
  }
  
  export interface InputWithLabelType extends InputFieldType {
    position?: 'fixed' | 'stacked' | 'floating';
    label: string;
  }
  
  export interface InputTextAreaType {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    inputMode?:
      | 'decimal'
      | 'email'
      | 'none'
      | 'numeric'
      | 'search'
      | 'tel'
      | 'text'
      | 'url';
    clearOnEdit?: boolean;
    rows?: number;
    cols?: number;
    required?: boolean;
  }
  
  export interface TextAreaWithLabelType extends InputTextAreaType {
    position?: 'fixed' | 'stacked' | 'floating';
    label?: string;
  }