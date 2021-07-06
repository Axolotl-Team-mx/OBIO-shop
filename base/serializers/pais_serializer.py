from rest_framework import serializers
from base.models import Products, Reviews, Pais

class PresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pais
        fields = '__all__'