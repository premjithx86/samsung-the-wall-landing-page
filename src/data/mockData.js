import { FiTv, FiLayers, FiCpu, FiCompass, FiShield, FiSliders } from 'react-icons/fi';

export const navigationLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Quantum Tech', href: '#tech' },
  { label: 'Specifications', href: '#specs' },
  { label: 'Support', href: '#support' },
];

export const tvFeatures = [
  {
    icon: FiTv,
    title: 'Infinity Air Screen',
    description: 'An expansive screen experience with a near-invisible bezel, removing all distractions so you get a more immersive viewing experience.',
    tag: 'Design'
  },
  {
    icon: FiCpu,
    title: 'NN Processor 8K',
    description: 'Powered by 64 neural networks, our state-of-the-art AI-powered processor upscales content automatically into stunning 8K resolution.',
    tag: 'Intelligence'
  },
  {
    icon: FiLayers,
    title: 'Quantum Matrix Pro',
    description: 'Ultra-fine contrast control with Quantum Mini LEDs unlocks billion-color realism, delivering absolute deep blacks and bright whites.',
    tag: 'Display'
  },
  {
    icon: FiCompass,
    title: 'Object Tracking Sound Pro',
    description: 'Dynamic audio tracking action from all corners of the screen. Built-in multi-directional speakers put you right in the center of the scene.',
    tag: 'Audio'
  },
  {
    icon: FiShield,
    title: 'Knox Security Vault',
    description: 'Defense-grade multi-layered security shields your private data, passwords, and connected IoT home appliances from external threats.',
    tag: 'Security'
  },
  {
    icon: FiSliders,
    title: 'Smart Hub & Gaming',
    description: 'Access all your streaming platforms, cloud gaming applications, and cloud workspaces instantly in one unified, fluid workspace.',
    tag: 'Hub'
  }
];

export const statistics = [
  { value: '33M+', label: 'Pixels of 8K Clarity' },
  { value: '64', label: 'AI Neural Networks' },
  { value: '144Hz', label: 'Motion Rate Pro' },
  { value: '0.9mm', label: 'Bezel Profile thickness' }
];

export const technicalSpecs = [
  { group: 'Display & Design', items: [
      { name: 'Resolution', value: '7,680 x 4,320 (True 8K)' },
      { name: 'Refresh Rate', value: 'Native 120Hz (Up to 144Hz)' },
      { name: 'Dimming Technology', value: 'Quantum Matrix Technology Pro' },
      { name: 'Screen Size Options', value: '65", 75", 85", 98"' }
    ]
  },
  { group: 'Audio Capabilities', items: [
      { name: 'Sound Output (RMS)', value: '90W' },
      { name: 'Speaker Type', value: '6.2.4CH' },
      { name: 'Dolby Atmos', value: 'Yes (Wireless / Object Tracking Sound Pro)' },
      { name: 'Q-Symphony', value: 'Yes (Audio synchronization with Soundbars)' }
    ]
  },
  { group: 'Connectivity & OS', items: [
      { name: 'Smart OS', value: 'Tizen OS Smart Hub' },
      { name: 'HDMI Ports', value: '4 x HDMI 2.1 (eARC, 4K@144Hz, VRR)' },
      { name: 'USB Ports', value: '3 x USB-A, 1 x USB-C' },
      { name: 'Wireless Content Sharing', value: 'Wi-Fi 6E, Bluetooth 5.2' }
    ]
  }
];
