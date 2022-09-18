import { View, Text, ViewProps } from 'react-native'

import { styles } from './styles'

interface HeaderProps extends ViewProps {
  title: string
  subtitle: string
}

export function Header({ title, subtitle, ...props }: HeaderProps) {
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}