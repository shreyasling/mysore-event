import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, ChevronDown, Image as ImageIcon, Video } from 'lucide-react';

const categories = ['All', 'Wedding', 'Traditional', 'Party Decor', 'Vlogs'];

const photoItems = [
  {
    id: 101,
    title: 'Serene White Seemantha',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 102,
    title: 'Grand Floral Mandap',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 103,
    title: 'Vintage Engagement Setup',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 104,
    title: 'Pastel Themed Wedding',
    category: 'Wedding',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 105,
    title: 'Royal Heritage Decor',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 106,
    title: 'Crystal & Lights Reception',
    category: 'Party Decor',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
];

const videoItems = [
  {
    id: 1,
    title: 'Divine Muhurtam',
    category: 'Wedding',
    video: 'https://scontent-lhr8-1.cdninstagram.com/o1/v/t16/f2/m69/AQPc5PwZgF7oWr9ni22PeGRBzL_e5WuT2uzDZYn7JU-vLArZoMRLtA5LpnxvekX1_3cN6lTy51Yl9Cbw24tNmi9C.mp4?strext=1&_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=YL2VBqivAQcQ7kNvwHORiG3&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTIyNzY3MjA0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjowLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NzEsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=5291679d9798b632&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRThVQWlZY2JadG5pbEVEQUFwb0d2X3VKZkJEYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzdFNDdGRUI1MzIyQjkyMUEwQkUwNEYwNTc3ODY2ODg4X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACamv6biybvIPxUCKAJDMywXQFHMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_Afvg7V34DiM2DuGLkZvC0TcJhBjuokXJ_P_33y-dnN8dOg&oe=69A4B111',
  },
  {
    id: 2,
    title: 'Simple Balloon Setup',
    category: 'Party Decor',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t16/f2/m69/AQPsQ1qMNt7IWzsYeKuSH1ZuB581C5bGdDs7oz2EqBdcMW_NKgd-20c_MyN5SzUfFZpK_OcS0s-UisOIEW8ZWeeR.mp4?strext=1&_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=paPaMEFpvykQ7kNvwGALIyS&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTIxNjA4NjM0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjoxLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MzYsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=6ed7aff128c0d59a&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTW9KRGliTGxLMG5jU0FFQUZOR3NCVTdybG9iYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzc4NDVCNEJCMUNGMzExQ0UwQ0JBN0E3MDY4OTkzMkIzX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACamprrI6rTIPxUCKAJDMywXQEIAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AftnF8_aAJFyEdr401AKRhA1YEpNYVhh9fmC5MnEp2q1Aw&oe=69A4AC5B',
  },
  {
    id: 3,
    title: 'Grand Wedding Backdrop',
    category: 'Wedding',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t16/f2/m69/AQNCtZlrWHwyDtfQi8jWYufT2i6Bry7oWC5rmYBYil-szJoCxKnrJEDVzpGzN3R2oL6e6gyISPWdjt3CnnUzvH6G.mp4?strext=1&_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=xaYuJ5NuD5wQ7kNvwH2KYbn&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTE4OTAyMzA0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjozLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTksInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=402d6370c201d095&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ1VWLXlYME9mbUtHWGNFQUdCOGlPcTUzR3BHYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzNGNDUzMDlCRkNBQTI4NzI4OERFNENEMUFGRDY0Qzk4X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACamtduYiqXIPxUCKAJDMywXQE27peNT988YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_Afs_TCGSNftOmhOxyDE4ffd6zNBfm-QIUPIt-QRhlcIoeA&oe=69A49B16',
  },
  {
    id: 4,
    title: 'Wedding Stage Decor',
    category: 'Wedding',
    video: 'https://scontent-lhr8-1.cdninstagram.com/o1/v/t16/f2/m69/AQPGfMw8NTCtrbW4CoOK4IdNSMp9Wjva-sKFi48OQ42QBEGirXQsxFR3bpJCzeZJo1E4CMWIDRtCYw5RYfFet06q.mp4?strext=1&_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=vzqsuyH_LGcQ7kNvwEfUGuk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTE4Mzk2ODk0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjo0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTIsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=b8c4baf894d1d8d4&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRzZpOHlXOW0ySEdKdE1GQUx3Mm1BUzBzSTFzYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzI4NDhEMzhGNEI4OTBGNEEwOEUyQjg3QkVCQUQ3Qjk3X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACam4IfRkaLIPxUCKAJDMywXQEoMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfsV7qYjViD4Bv1RHnguuwQ9E7FXSQVyNQjRB9t_mywHMA&oe=69A49B3D',
  },
  {
    id: 5,
    title: 'Entrance Pathway',
    category: 'Wedding',
    video: 'https://scontent-lhr8-1.cdninstagram.com/o1/v/t16/f2/m69/AQMCavLJuGTfopt30BFByfIJMpU3dh6YE31S_XUmI13KA-UztmdyHt0DnPl-h7tjzdo96IvVgZMJ6B-9-c6cXL9P.mp4?strext=1&_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=3hdNw5UNozcQ7kNvwELuBlZ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTE2MTU2MTA0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjo1LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NjQsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=1a8cd1c95fdc23d9&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQVdGcUNYNG9va2lZSkVJQUgwcm5MQWkwazFWYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0RENDE0MjQ1RUU1ODkyMkZGOTU3NDhBREFCNEE0NEE5X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACammdaOjJXIPxUCKAJDMywXQFACHKwIMScYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfvNC6aZNHBOxs0ceVCzpfdnoH4x3W0IJKHabq7duStZLg&oe=69A47E19',
  },
  {
    id: 6,
    title: 'Behind the Scenes',
    category: 'Vlogs',
    video: 'https://scontent-lhr8-1.cdninstagram.com/o1/v/t16/f2/m69/AQPBHHJMtv8l-fy2CPmbvBReq4oCru9M2P9-kOPw194qVp3SwTy1jeyWMi4Qm1Un-FcKZh78qkK5Elhcs0OTBcLW.mp4?strext=1&_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=oCasHMHlzcYQ7kNvwF_72Kg&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTE1MjgyMjY0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjo2LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=7ff1505a32de278f&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT2NOMGlWQ0d2OE96LU1FQU1sdnNJS18tN3czYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzQzNDIyQjFEQjY5RUQ0M0RGNEJGRDU5NEZENjFEQTgwX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACamgeaGgZDIPxUCKAJDMywXQEziDEm6XjUYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfvmcZoXRG8-yVLn1kqXXTYxepK09pXct4CWfSeLE_7rZQ&oe=69A4886D',
  },
  {
    id: 7,
    title: 'Neon Heart Setup',
    category: 'Party Decor',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t16/f2/m69/AQO6zvHbZ00fbab6l9tRkG7UgItvG4h6PLQupmwJ4M5AGZsBg4VfzrF1M_8ifpH-GhqtBYr1vrfmVz9OSkgKCwLE.mp4?strext=1&_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=1chzTE1KyJcQ7kNvwG05O2e&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTA5MDI5Njk0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjoxMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjE0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=ffd1304e67c42267&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQ1NTeVNXLWRUeXl5TVVDQU1jY0pfTzhnQXc4YnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0UwNEFEMUE4OEFGOEE3QTA1OTEyM0I1MDg3RTEwMTg5X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACam0KDDzuvHPxUCKAJDMywXQC2qfvnbItEYEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_Afv5fro9Pxp13o9pNhsNzCMi-bZPWbZbwE5yIMDR0K8-ZA&oe=69A4AC23',
  },
  {
    id: 8,
    title: 'Seemantha Plate Art',
    category: 'Traditional',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t16/f2/m69/AQOEeTEWL14oRHJe5GafFkSBrg54qrOQo4qyxKtJTCjxAtHNbTlq0Off54GywhXTpNUltqiVx3E1SyOBZ-rbb-6P.mp4?strext=1&_nc_cat=102&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=ppt7gtweYo0Q7kNvwGpGL62&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4OTAzMTI0ODU0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjoxNSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQ5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=5f18ae79d2695f92&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRmxjWUNXUFdESllyaVVEQU03ZldWc1gzRU0xYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzMzNDk3NEM2NkJFOENFRjE4MDZGNDVBRDI0NEU0MkFFX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACamnOqJn8nHPxUCKAJDMywXQEiEOVgQYk4YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfuppK8hCSIkve9GQU1JSg7pZeT73SsmqTB_PQswUuc7jg&oe=69A48CE2',
  },
  {
    id: 9,
    title: 'Elegant Engagement',
    category: 'Traditional',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t16/f2/m69/AQO_sNZOyY5G47-ix35rVys9iiCbwFlR59ybKnA0e5j58TYRLLuwzT3ehe4DZCp37IrCof1GpsOAKux4CDzXwI7C.mp4?strext=1&_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=ju6JevTHvCcQ7kNvwGBOUQu&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4ODk5MzQwODM0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjoxOCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU5LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=a53c29abdb644ba&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRU9CV1NVeGdTQ1YtTnNEQUMybU1nRFVGdHRHYnNwVEFRQUYVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0VENDFDQUE2RUFENDFGM0YyM0VENkM0QTgxMTc4OTkzX2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACam6sfhm7PHPxUCKAJDMywXQE27peNT988YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfsG0NSMPjLYT-aPHooJp-MFeWIpIkXfDgLdhEq3ikn7Jw&oe=69A47F26',
  },
  {
    id: 10,
    title: 'Chocolate Bouquet',
    category: 'Party Decor',
    video: 'https://scontent-lhr8-1.cdninstagram.com/o1/v/t2/f2/m86/AQNiluC_bghf_NSirKKhbdlj1AUN7R21hks1RtLFRMan9K2ot14Qju4E8XG0VTKZ2Gb1prilg_SDskaTpBLv_VQJlSuQWtvWVHv1BO0.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_ohc=rfmjQ7lTBjgQ7kNvwFVt-oH&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTc4ODk2OTA0MTE0MjI4NjcsImFzc2V0X2FnZV9kYXlzIjoyMCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjU0LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=d5c2c9cfebad1bc2&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yNDQ5NDUwQzEwOUYzOUY0QzUzNUYzOEMxRTVFNzI4NV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0JENDE5NEFDOEEyNkY3QkFGOTMyMDYxODA2MkI2MTk2X2F1ZGlvX2Rhc2hpbml0Lm1wNBUCAsgBEgAoABgAGwKIB3VzZV9vaWwBMRJwcm9ncmVzc2l2ZV9yZWNpcGUBMRUAACam0uqhhKXHPxUCKAJDMywXQEr7peNT988YEmRhc2hfYmFzZWxpbmVfMV92MREAdf4HZeadAQA&oh=00_AfuUvQOD7DuI1XUWGWDR9h2WCaRHA1FbjjCSO5TExcvl7Q&oe=69A0A268',
  },
  {
    id: 11,
    title: 'Valentine Special Setup',
    category: 'Party Decor',
    video: 'https://scontent-lhr8-2.cdninstagram.com/o1/v/t2/f2/m86/AQOkoxFq_wBwCIvjGQi2ZafHuSkMcXClXtt7Pgykjd2-NzNO1Xxd-9mM2gWVFeC_W8o-jGxNZWmcRJF_82aZIvWxoKwJKsAuoy89vTM.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_ohc=O0RlQSbI8C4Q7kNvwGbQmIQ&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6OTE2NTk0OTcwODQ1NTEzLCJhc3NldF9hZ2VfZGF5cyI6NDIsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjozNiwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=2fb0b002d9e501d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9FMjRCMUZFMkRDMkQ2RjlCQzdFQjE3MkVEQjNDMDM5Nl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8yMTAzOTg5OTQwMzg0MTYwXzgxNzYwMTA1NjE4MTM1OTY5NzcubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJpKFn9rs6KADFQIoAkMzLBdAQlU_fO2RaBgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gdl5p0BAA&oh=00_AfulTxmc-JBkNRq6ARJKtZnZyNknD2YgsUwu3O-d1V35-w&oe=69A0AF3E',
  },
  {
    id: 12,
    title: 'Bridal Glam',
    category: 'Wedding',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t2/f2/m86/AQPSmAVSdcXGh6kGSOa_JyEUuFwao4l5maOXCvPeTUiBWUrS8v634eH6buaOUOAEY9yZ15SxI_GsLfwAGkQ_hFBVWQDqy8yPRayQ40o.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=zb1GjxrnkYMQ7kNvwHWmKap&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTI1MjM3MzU4MzM3NzA1NCwiYXNzZXRfYWdlX2RheXMiOjUzLCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6NTgsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=9e9865c7de3eba3b&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CODRBNEMyRTlCREE4MThCOTJFNEJEMEQ1OTA1NERBRF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYRmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84NDkwMjE2NDc4NDI2MjBfNjY1OTI2NzUyNTEwNzMwMTAzNS5tcDQVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmvMqBqd7BuQQVAigCQzMsF0BNWZmZmZmaGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&oh=00_AfskpF7BfnhWLlw229pYoKG-cDhccz3GBHI7wh2t02x7_w&oe=69A0B6F7',
  },
  {
    id: 13,
    title: 'New Year Celebration',
    category: 'Party Decor',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t2/f2/m86/AQMNiom62acyTe1ob1A96KF8eDbsyJiI62s2I03SnQJMSWrk8k_QZLc6cjF5M8DL3pd9NfMhwElk2ty1LSwIz4ga94Z1Ypr-RvZKY8g.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=10pUJeyyVUIQ7kNvwEbJkcH&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzExMDU4ODI2NTc4MDgzOCwiYXNzZXRfYWdlX2RheXMiOjU3LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTUsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=7de26d65ede9b9e5&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DNTQ2OUNCNzE1MjBFRjA4MzY5MjBDMURGMkI4Qzg4OV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTy1uT0NSakRHVTJ6a2tFQU84VnlSUFpOSTlTYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmzNn-yYjEhgsVAigCQzMsF0AuEOVgQYk3GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&oh=00_AfswODRCqCnzIQEd3nUZsa3oZMlwcsfY8sxTmBZqV6kCYA&oe=69A09D0E',
  },
  {
    id: 14,
    title: 'Party Setup',
    category: 'Party Decor',
    video: 'https://scontent-lhr6-1.cdninstagram.com/o1/v/t2/f2/m86/AQOITnMiSKQjKT1GfSMANBHFw4tLcOg1lPDPGGcmlgBVDNEJXvV-4JTIsIWHbNeehhB41eC3l-23qy3xi5XNnXXwBo44AickpDPlfy4.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-lhr6-1.cdninstagram.com&_nc_ohc=6YL6db4dfb4Q7kNvwFx6B85&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6ODYwMDkwMTg2ODM1MjE3LCJhc3NldF9hZ2VfZGF5cyI6NTcsInZpX3VzZWNhc2VfaWQiOjEwMDk5LCJkdXJhdGlvbl9zIjo0NCwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_gid=TKDbQ5R_FEDjX6KIOO3qNQ&_nc_zt=28&vs=a3aa1a2b091afc84&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84NTRENjg3NjVGNzFCN0QwMjI4N0ZCNkE0QjU1QUFCNl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYR2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xNDAwNjQzNDUxNTg2MzYwXzgzODEwNTc1NTcxNzUxMDA0NTIubXA0FQICyAESACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJqKU_aDrj4cDFQIoAkMzLBdARhEGJN0vGxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1_gdl5p0BAA&oh=00_AfsUCcUEgf1vBvJV3wEtZSpiROEivAuumduyf7amb1_O0w&oe=69A09CB2',
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<'photos' | 'videos'>('videos');

  const toggleMute = (id: number) => {
    setMutedVideos(prev => ({
      ...prev,
      [id]: prev[id] === undefined ? false : !prev[id]
    }));
  };

  const currentItems = viewMode === 'photos' ? photoItems : videoItems;

  const filteredItems = currentItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-6"
            >
              Portfolio <span className="italic">Highlights</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ink/70 text-lg mb-8"
            >
              A glimpse into our crafted experiences, from intimate traditional ceremonies to grand luxury weddings.
            </motion.p>

            {/* View Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex bg-bg-warm p-1 rounded-full border border-ink/10"
            >
              <button
                onClick={() => { setViewMode('photos'); setShowAll(false); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm tracking-wide transition-all ${
                  viewMode === 'photos' ? 'bg-white shadow-sm text-ink' : 'text-ink/60 hover:text-ink'
                }`}
              >
                <ImageIcon size={16} />
                Photos
              </button>
              <button
                onClick={() => { setViewMode('videos'); setShowAll(false); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm tracking-wide transition-all ${
                  viewMode === 'videos' ? 'bg-white shadow-sm text-ink' : 'text-ink/60 hover:text-ink'
                }`}
              >
                <Video size={16} />
                Reels
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-ink text-white'
                    : 'bg-bg-warm text-ink/70 hover:bg-ink/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] w-[80vw] sm:w-[60vw] md:w-auto flex-shrink-0 snap-center overflow-hidden rounded-2xl bg-bg-warm"
              >
                {viewMode === 'videos' && 'video' in item ? (
                  <>
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted={mutedVideos[item.id] !== false}
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <button 
                      onClick={() => toggleMute(item.id)}
                      className="absolute top-4 right-4 z-20 p-2 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white transition-colors"
                    >
                      {mutedVideos[item.id] === false ? <Volume2 size={18} /> : <VolumeX size={18} />}
                    </button>
                  </>
                ) : (
                  <img
                    src={'image' in item ? item.image : ''}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 pointer-events-none">
                  <span className="text-white/80 text-xs uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length > 6 && (
          <motion.div 
            layout
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-white transition-all uppercase tracking-widest text-sm"
            >
              {showAll ? 'Show Less' : 'View All Works'}
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
