from rest_framework import serializers
from base.models import Products, Reviews, Ciudad

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = '__all__'
