from rest_framework import serializers
from .models import Cotizacion, DetalleCotizacion
from clientes.models import Cliente
from productos.models import Producto  

class DetalleCotizacionSerializer(serializers.ModelSerializer):
    producto_nombre = serializers.StringRelatedField(source='producto', read_only=True)

    class Meta:
        model = DetalleCotizacion
        fields = ['id', 'producto', 'producto_nombre', 'cantidad', 'precio_unitario', 'subtotal']

class CotizacionSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.StringRelatedField(source='cliente', read_only=True)
    detalles = DetalleCotizacionSerializer(many=True)

    class Meta:
        model = Cotizacion
        fields = ['id', 'cliente', 'cliente_nombre', 'fecha', 'total', 'detalles']

    def create(self, validated_data):
        detalles_data = validated_data.pop('detalles')
        cotizacion = Cotizacion.objects.create(**validated_data)

        for detalle in detalles_data:
            DetalleCotizacion.objects.create(cotizacion=cotizacion, **detalle)

        return cotizacion
