#!/bin/bash

echo "🚀 Despliegue automático del Cyberpunk RPG Online"

# Entrar al cliente
cd client || exit

# Opción 1: Compilar APK con Expo
echo "📦 Compilando APK con Expo..."
expo build:android

# Opción 2: Compilar APK con Android Studio (gradle)
echo "📦 Compilando APK con Gradle..."
./gradlew assembleRelease

# Resultado esperado
echo "✅ APK generado en:"
echo "   - Expo: consulta el enlace de descarga en la consola"
echo "   - Gradle: client/android/app/build/outputs/apk/release/app-release.apk"

